package com.techprimers.security.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@EnableWebSecurity //this enables spring security
@Configuration
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

	//WebSecurityConfigurerAdapter use to configure spring security
	
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
       
    	auth.inMemoryAuthentication() //using in memeory we can give uname pword and role here only
    		.withUser("kishan").password("test").roles("USER")
    		.and()
            .withUser("demo").password("test2").roles("ADMIN");
    }

    @Override
    protected void configure(HttpSecurity httpSecurity) throws Exception {

        httpSecurity
                .authorizeRequests() // This enables authorization 

                //.antMatchers("**/rest/*") //This is to  authorize particular url
                
                
                //.antMatchers("**/hello").hasRole("USER") This states that /hello url will allow only users with role USER
                
                .anyRequest() // we are authorizing all requests
                
                .fullyAuthenticated() //This is for enabling custom filter
                
                .and()
                
                // We are adding custom filter before basic auth happens
                
                //.addFilterBefore(customFilter(), BasicAuthenticationFilter.class)
                
                .httpBasic();  // This gives basic security
        
        
        httpSecurity.csrf().disable();

    }

    @Bean
    public CustomFilter customFilter() {
        return new CustomFilter();
    }
}
