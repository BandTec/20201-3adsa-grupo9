package jobbyjobs.com.jobbyjobs.services;

import jobbyjobs.com.jobbyjobs.models.RespostaCep;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(value = "viaCep", url = "https://viacep.com.br/")
public interface ViaCepService {

    @GetMapping("/ws/{cep}/json")
    RespostaCep getCep(@PathVariable String cep);

}
