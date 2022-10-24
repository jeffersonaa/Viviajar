package com.viviajar.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.viviajar.model.Clientes;
import com.viviajar.repository.ClienteRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/clientes")
public class ClienteController {
	
	@Autowired
	private ClienteRepository clienteRepository;
	
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public Optional<Clientes> destino(@PathVariable Long id) {
		return clienteRepository.findById(id);
	}
	
	@GetMapping
	public List<Clientes> listar() {
		return clienteRepository.findAll();
	}
	
	@PostMapping
	public Clientes adicionar(@RequestBody Clientes cliente) {
		return clienteRepository.save(cliente);
	}
	
	@PutMapping
	public Clientes atualizar(@RequestBody Clientes cliente) {
		return clienteRepository.save(cliente);
	}
	
	@DeleteMapping
	public void deletar(@RequestBody Clientes cliente) {
		clienteRepository.delete(cliente);
	}
	
}