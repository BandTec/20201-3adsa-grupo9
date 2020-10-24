insert into endereco
(id_endereco, nome_rua, nome_bairro, numero, complemento, cep) values
(null, 'Manuel Augusto Ferreirinha', 'Nova Gety', 1300, 'apto 13', '09580020'),
(null, 'Manuel Augusto Ferreirinha', 'Nova Gety', 1200, null, '09580020');

insert into usuario_conta
(id_usuario_conta, agencia, numero_conta) values
(null, 010, 909028),
(null, 077, 101025);

insert into usuario
(id_usuario, usuario_nome, usuario_email, usuario_senha,
 usuario_cpf, tipo_usuario, endereco_id_endereco, usuario_conta_id_usuario_conta) values
 (null, 'Matheus Fernandes Costa', 'fernandesmatheus369@gmail.com', 'palmeiras100', '51217820809',1, 1, 1),
 (null, 'Bruna Garcia Delfino', 'bruninhalinda@gmail.com', 'digisystems', '18999237307', 2, 2, 2);

 insert into baba
 (id_baba, cozinhar, limpar, preco_se_cozinha, preco_se_limpa,
  prec_idade_ate_tres, preco_idade_tres_ate_oito, preco_idade_nove_ate_quinze) values
  (null, true, true, 50.00, 50.00 , 75.00, 45.00, 25.00);

