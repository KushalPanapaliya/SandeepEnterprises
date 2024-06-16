package com.webapp.senterprise.repositories;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.webapp.senterprise.entities.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

	
}
