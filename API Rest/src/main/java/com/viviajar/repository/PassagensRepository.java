package com.viviajar.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.viviajar.model.Passagem;

@Repository
public interface PassagensRepository extends JpaRepository<Passagem, Long> {

}
