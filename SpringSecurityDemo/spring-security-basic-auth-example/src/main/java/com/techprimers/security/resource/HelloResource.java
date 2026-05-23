package com.techprimers.security.resource;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;

@RestController
@RequestMapping("/rest/hello")
public class HelloResource {

	@GetMapping
	public String hello(@AuthenticationPrincipal final UserDetails userDetails) {

		//@AuthenticationPrincipal final UserDetails userDetails This line will inject current user details
		
		String username = userDetails.getUsername();
		
		Collection<? extends GrantedAuthority> authorities = userDetails.getAuthorities();
		
		//By default spring will add ROLE_ to our role eg: ROLE_USER
		
		authorities.forEach(System.out::println);

		return "Hello World";
	}
}
