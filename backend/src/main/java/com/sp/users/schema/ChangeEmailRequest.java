package com.sp.users.schema;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ChangeEmailRequest {
    private String newEmail;
}