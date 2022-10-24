package com.viviajar.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.viviajar.model.Clientes;
import com.viviajar.model.Destino;
import com.viviajar.model.Passagem;
import com.viviajar.repository.ClienteRepository;
import com.viviajar.repository.DestinoRepository;
import com.viviajar.repository.PassagensRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/passagens")
public class PassagemController {
	
	@Autowired
	private PassagensRepository passagensRepository;
	
	@Autowired
	private DestinoRepository destinoRepository;
	
	@Autowired
	private ClienteRepository clienteRepository;
	
	
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public Optional<Passagem> passagem(@PathVariable Long id) {
		return passagensRepository.findById(id);
	}
	
	@GetMapping
	public List<Passagem> listar() {
		return passagensRepository.findAll();
	}
	
	@PostMapping
	public Passagem adicionar(@RequestBody Passagem passagem) {
		
		return passagensRepository.save(passagem);
		
	}
	
	@PutMapping
	public Passagem atualizar(@RequestBody Passagem passagem) {
		return passagensRepository.save(passagem);
	}
	
	@DeleteMapping
	public void deletar(@RequestBody Passagem passagem) {
		passagensRepository.delete(passagem);
	}
	
}
