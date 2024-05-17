package com.sp.gestion.point_capture.schema;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class CircuitRequest {
    private String libelle;
    private String code;
    private String description;
    private String depart;
    private String arrivee;
    private String distance;
    private String duree;
    private boolean status;
}
