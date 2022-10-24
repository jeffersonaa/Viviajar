package com.viviajar.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.viviajar.model.Destino;
import com.viviajar.repository.DestinoRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/destinos")
public class DestinoController {
	
	@Autowired
	private DestinoRepository destinoRepository;
	
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public Optional<Destino> destino(@PathVariable Long id) {
		return destinoRepository.findById(id);
	}
	
	@GetMapping
	public List<Destino> listar() {
		return destinoRepository.findAll();
	}
	
	@PostMapping
	public Destino adicionar(@RequestBody Destino destino) {
		return destinoRepository.save(destino);
	}
	
	@PutMapping
	public Destino atualizar(@RequestBody Destino destino) {
		return destinoRepository.save(destino);
	}
	
	@DeleteMapping
	public void deletar(@RequestBody Destino destino) {
		destinoRepository.delete(destino);
	}
	
}
