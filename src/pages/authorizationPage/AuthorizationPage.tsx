import React from 'react';
import { IconNames } from "@blueprintjs/icons";
import { Button, Callout, FormGroup, InputGroup, Intent } from "@blueprintjs/core";
import classes from "./AuthorizationPage.module.scss";
import Logo from "../../components/logo/Logo";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { ROUT_HOME_PAGE } from "../../app/routing/constans";


interface IFormInput {
  login: string;
  password: string;
}

const AuthorizationPage: React.FC = () => {
  const history = useHistory();
  const {
    control,
    formState: { errors },
    setError,
    handleSubmit
  } = useForm<IFormInput>({
    defaultValues: {
      login: '',
      password: '',
    }
  });

  const onSubmit: SubmitHandler<IFormInput> = data => {
    if (data.login === "admin" && data.password === "123") {
      return history.push(ROUT_HOME_PAGE)
    } else {
      setError('root', {
        type: "Неправильный логин или пароль",
      })
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.logo}>
        <Logo/>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="login"
          control={control}
          rules={{ required: "Поле обязательное" }}
          render={({ field }) =>
            <FormGroup
              labelFor="login-input"
              helperText={errors.login?.message}
              intent={errors.login?.message ? Intent.DANGER : undefined}
            >
              <InputGroup
                id="login-input"
                leftIcon={IconNames.USER}
                placeholder="Логин"
                large
                autoFocus
                onChange={(e) =>field.onChange(e)}
                value={field.value}
                intent={errors.login?.message ? Intent.DANGER : undefined}
              />
            </FormGroup>
          }
        />
        <Controller
          name="password"
          control={control}
          rules={{ required: "Поле обязательное" }}
          render={({ field }) =>
            <FormGroup
              labelFor="password-input"
              helperText={errors.password?.message}
              intent={errors.login?.message ? Intent.DANGER : undefined}
            >
              <InputGroup
                id="password-input"
                leftIcon={IconNames.LOCK}
                placeholder="Пароль"
                large
                onChange={(e) =>field.onChange(e)}
                value={field.value}
                intent={errors.login?.message ? Intent.DANGER : undefined}
              />
            </FormGroup>
          }
        />
        <FormGroup>
          {errors.root && (
            <Callout intent={Intent.WARNING}>
              {errors.root?.type}
            </Callout>
          )}
        </FormGroup>
        <Button type="submit" intent={Intent.PRIMARY} text="Войти" large fill/>
      </form>
    </div>
  )
}

export default AuthorizationPage;
