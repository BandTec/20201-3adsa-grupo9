insert into endereco
(id_endereco, nome_rua, nome_bairro, numero, complemento, cep, zona_regional) values
(null, 'Manuel Augusto Ferreirinha', 'Nova Gety', 1300, 'apto 13', '09580020', 'zona sul'),
(null, 'Manuel Augusto Ferreirinha', 'Nova Gety', 1200, null, '09580020', 'zona norte');

insert into usuario_conta
(id_usuario_conta, agencia, numero_conta, titular_conta, banco, tipo_conta, pessoa_fisica, pessoa_juridica) values
(null, 010, 909028, 'Matheus Fernandes', 'Itau', 'Conta corrente', true, false),
(null, 077, 101025, 'Bruna Garcia', 'Banco do Brasil', 'Conta corrente', false, true);

insert into usuario
(id_usuario, usuario_nome, usuario_email, usuario_senha,
 usuario_cpf, usuario_telefone, tipo_usuario, endereco_id_endereco, usuario_conta_id_usuario_conta) values
 (null, 'Matheus Fernandes Costa', 'fernandesmatheus369@gmail.com', 'palmeiras100', '51217820809', '11905007000',1, 1, 1),
 (null, 'Bruna Garcia Delfino', 'bruninhalinda@gmail.com', 'digisystems', '18999237307', '11940029822', 2, 2, 2);

 insert into baba
 (id_baba, cozinhar, limpar, preco_se_cozinha, preco_se_limpa,
  preco_idade_ate_tres, preco_idade_tres_ate_oito, preco_idade_nove_ate_quinze) values
  (null, true, true, 50.00, 50.00 , 75.00, 45.00, 25.00);

  insert into profissional
  (id_profissional, nome_profissao, cobrar_por_hora, valor_hora, valor_fixo, qtd_dias_trabalha,
   segunda, terca, quarta, quinta, sexta, sabado, domingo, baba_id_baba, usuario_id_usuario) values
   (null, 'Baba', true, 10.0, 0.00, 3, true, false, true, false, true, false, false, 1, 1);

insert into notificacoes 
(msg_notificacao, baba_notificada_id_baba) values 
('Pessoa te respondeu.', 1);

insert into jobs_solicitados 
(qtd_horas_trabalho, valor_total, baba_solicitada_id_baba, usuario_solicitante_id_usuario) values 
(5, 200, 1, 1), (5, 200, 1, 2);
