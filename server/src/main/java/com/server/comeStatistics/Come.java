package com.server.comeStatistics;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.util.Arrays;

@Entity
public class Come {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private double[] come;

    public Come() { this.come = new double[]{ }; }
    public Come(double[] come) { this.come = come;}

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public double[] getCome() {
        return come;
    }

    public void setCome(double[] come) {
        this.come = come;
    }

    @Override
    public String toString() {
        return "Come{" +
                "id=" + id +
                ", come=" + Arrays.toString(come) +
                '}';
    }
}
