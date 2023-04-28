import React from 'react';
import { Button, Callout, FormGroup, InputGroup, Intent } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import { useForm, Controller, SubmitHandler, useFormState } from "react-hook-form";
import Logo from "../../components/logo/Logo";
import classes from './AuthorizationPage.module.scss'
import authApi from '../../api/auth'
import { isAxiosError } from "axios";
import { useNavigate  } from "react-router-dom";

interface ISingInForm {
  login: string,
  password: string,
}

const AuthorizationPage: React.FC = () => {
  const navigate = useNavigate();
  const { handleSubmit, control, setError, formState } = useForm<ISingInForm>();
  const { isSubmitting } = formState;
  const { errors } = useFormState({
    control
  })

  const onSubmit: SubmitHandler<ISingInForm> = async (data) => {
    try {
      const res = await authApi.auth(data);
      if (res) {
        navigate('/home', { replace: true })
     }
    } catch (e) {
      if (isAxiosError(e)) {
        setError('root', {
          type: e.response?.data.message,
        })
      }
    }
  }

  const loginValidation = {
    required: "Обязательно для заполнения",
    validate: (value: string)=> {
      if(value.match(/[а-яА-Я]/)) {
        return "Логин не может содержать русские буквы"
      }
      return true;
    }
  }

  const passwordValidation = {
    required: "Обязательно для заполнения",
    validate: (value: string)=> {
      if(value.length < 6) {
        return "Пароль должен быть длинее 6 символов"
      }
      return true;
    }
  }

  return (
    <div className={classes.container}>
      <Logo/>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="login"
          rules={ loginValidation }
          render={({ field }) => (
            <FormGroup
              labelFor="login"
              helperText={ errors.login?.message }
              intent={errors.login?.message ? Intent.DANGER : undefined}
            >
              <InputGroup
                id="login"
                placeholder="Логин"
                leftIcon={IconNames.USER}
                large
                autoFocus
                onChange={(e) => field.onChange(e)}
                value={field.value}
                intent={errors.login?.message ? Intent.DANGER : undefined}
              />
            </FormGroup>
          )}
        />
        <Controller
          control={control}
          name="password"
          rules={ passwordValidation }
          render={({ field }) => (
            <FormGroup
              labelFor="password"
              helperText={ errors.password?.message }
              intent={errors.password?.message ? Intent.DANGER : undefined}
            >
              <InputGroup
                id="password"
                placeholder="Пароль"
                leftIcon={IconNames.LOCK}
                large
                onChange={(e) => field.onChange(e)}
                value={field.value}
                intent={errors.password?.message ? Intent.DANGER : undefined}
              />
            </FormGroup>
          )}
        />
        <FormGroup>
          {errors.root && (
            <Callout intent={Intent.WARNING}>
              {errors.root?.type}
            </Callout>
          )}
        </FormGroup>
        <Button
          type="submit"
          loading={isSubmitting}
          disabled={isSubmitting}
          text="Вход"
          intent={Intent.PRIMARY}
          fill
          large
        />
      </form>
    </div>
  )
}

export default AuthorizationPage;
