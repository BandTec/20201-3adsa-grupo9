package jobbyjobs.com.jobbyjobs.services;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;


@FeignClient(value = "smsdev", url = "https://api.smsdev.com.br/v1/send")
public interface SmsService {
    @RequestMapping(method = RequestMethod.POST)
    RespostaSms enviarSms(
            @RequestParam(required = true) String key,
            @RequestParam(required = true) Integer type,
            @RequestParam(required = true) Long number,
            @RequestParam(required = true) String msg);
}
