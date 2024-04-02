package com.sp.repository;

import com.sp.model.Agent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AgentRepository extends JpaRepository<Agent, Integer> {
    List<Agent> findByEmail(String email);
}
