package SpringFrameworkConfiguration.JavaConfig.joke.services;

import org.springframework.stereotype.Service;

import SpringFrameworkConfiguration.JavaConfig.joke.service.ChuckNorrisQuotes;

/**
 * Created by jt on 5/25/17.
 */
@Service
public class JokeServiceImpl implements JokeService {

    private final ChuckNorrisQuotes chuckNorrisQuotes;

    public JokeServiceImpl(ChuckNorrisQuotes chuckNorrisQuotes) {
        this.chuckNorrisQuotes = chuckNorrisQuotes;
    }

    @Override
    public String getJoke() {
      //  return chuckNorrisQuotes.getRandomQuote();9
    	return "";
    }
}
