package jobbyjobs.com.jobbyjobs;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@EnableFeignClients
@SpringBootApplication
public class JobbyJobsApplication {

	public static void main(String[] args) {
		SpringApplication.run(JobbyJobsApplication.class, args);
	}

}
