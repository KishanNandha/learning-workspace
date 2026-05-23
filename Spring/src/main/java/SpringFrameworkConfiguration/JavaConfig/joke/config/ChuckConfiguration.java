package SpringFrameworkConfiguration.JavaConfig.joke.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import SpringFrameworkConfiguration.JavaConfig.joke.service.ChuckNorrisQuotes;

/**
 * Created by jt on 5/25/17.
 */
@Configuration
public class ChuckConfiguration {

    @Bean
    public ChuckNorrisQuotes chuckNorrisQuotes(){
        return new ChuckNorrisQuotes();
    }

}
