package jobbyjobs.com.jobbyjobs.services;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@FeignClient(value = "viaCep", url = "https://viacep.com.br/")
public interface ViaCepService {

    @RequestMapping(method = RequestMethod.GET, value = "/ws/{cep}/json")
    RespostaCep getCep(@PathVariable String cep);

}
