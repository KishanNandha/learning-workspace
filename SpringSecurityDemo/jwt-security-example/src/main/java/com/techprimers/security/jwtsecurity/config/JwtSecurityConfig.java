package com.techprimers.security.jwtsecurity.config;

import com.techprimers.security.jwtsecurity.security.JwtAuthenticationEntryPoint;
import com.techprimers.security.jwtsecurity.security.JwtAuthenticationProvider;
import com.techprimers.security.jwtsecurity.security.JwtAuthenticationTokenFilter;
import com.techprimers.security.jwtsecurity.security.JwtSuccessHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.ProviderManager;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import java.util.Collections;

@EnableGlobalMethodSecurity(prePostEnabled = true)
@EnableWebSecurity
@Configuration
public class JwtSecurityConfig extends WebSecurityConfigurerAdapter {


    @Autowired
    private JwtAuthenticationProvider authenticationProvider;
    
    @Autowired
    private JwtAuthenticationEntryPoint entryPoint;

    //we are creating custom auth manager with custom auth provider
    @Bean
    public AuthenticationManager authenticationManager() {
        return new ProviderManager(Collections.singletonList(authenticationProvider));
    }

    //Spring doesn't provide default filter for JWT just like it provides to LDAP
    @Bean
    public JwtAuthenticationTokenFilter authenticationTokenFilter() {
    	//create custom filter
        JwtAuthenticationTokenFilter filter = new JwtAuthenticationTokenFilter();
        
        //add custom auth manager to filter
        filter.setAuthenticationManager(authenticationManager());
        
        //custom success handler
        filter.setAuthenticationSuccessHandler(new JwtSuccessHandler());
        
        return filter;
    }


    @Override
    protected void configure(HttpSecurity http) throws Exception {

        http.csrf().disable()
                .authorizeRequests().antMatchers("**/rest/**").authenticated()
                .and()
                //for redirecting error messages.
                .exceptionHandling().authenticationEntryPoint(entryPoint)
                .and()
                //We are making session stateless (don't store session anywhere)
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);

        //Adding filter before UsernamePasswordAuthenticationFilter
        http.addFilterBefore(authenticationTokenFilter(), UsernamePasswordAuthenticationFilter.class);
        
        //this will add some default headers 
        http.headers().cacheControl();

    }
}
