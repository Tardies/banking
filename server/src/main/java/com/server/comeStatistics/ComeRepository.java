package com.server.comeStatistics;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ComeRepository extends CrudRepository<Come, Long> { }
