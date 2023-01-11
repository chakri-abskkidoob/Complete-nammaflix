package com.nammaflix.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nammaflix.demo.entity.User;

@Repository
public interface UserRepo extends JpaRepository<User, Long>{

}
