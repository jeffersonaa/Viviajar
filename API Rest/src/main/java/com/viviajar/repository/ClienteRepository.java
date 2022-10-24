package com.viviajar.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.viviajar.model.Clientes;

@Repository
public interface ClienteRepository extends JpaRepository<Clientes, Long> {

}
