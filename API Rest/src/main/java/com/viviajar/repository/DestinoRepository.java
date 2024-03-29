package com.viviajar.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.viviajar.model.Destino;

@Repository
public interface DestinoRepository extends JpaRepository<Destino, Long> {

}
