import React from 'react';
import './assistente.css';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));


/* Etapas do preenchimento do cadastro*/
function Etapas() {
  return ['Dados cadastrais', 'Cadastro de perfil', 'Cadastro de endereço', 'Dados bancários'];
}

/* Função para escolha de etapas do cadastro - contratante - feita com switch case
function getStepContent(step) {
  switch (step) {
    case 0:
      return 'Informe seus dados para o cadastro';
    case 1:
      return 'Agora vamos preencher seu perfil profissional';
    case 2:
      return 'Cadaste seu endereço e encontre os contrantantes mais próximo de voce';
    case 3:
      return 'Preencha as informações do seus dados bancários';
    default:
      return 'Preencha os campos corretamente';
  }
}
*/


export default function AssistenteHorizontal() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = Etapas();

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("Você não pode pular uma etapa que não seja opcional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = 
            <Typography variant="caption"></Typography>;
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography  
            style={{marginLeft:"40%", fontSize:'18px', fontFamily: 'Aldrich',color:"white"}} 
            className={classes.instructions}>
            Todas as etapas concluídas, parabéns!
            </Typography>
            <Button
             style={{background: "var(--blue)", marginLeft:"45%", marginTop:"30%"}}
             onClick={handleReset} className={classes.button}>
              Concluir cadastro
            </Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{(activeStep)}</Typography>
            <div>
              <Button 
              style={{background: "var(--purple)", marginLeft:"45%", marginTop:"30%"}} 
              disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                Voltar
              </Button>
              

              <Button
              style={{background: "var(--blue)",marginTop:"30%"}}
                variant="contained"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? 'Finalizar' : 'Próximo'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

//export default Assistente;