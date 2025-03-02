"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {useAuth} from "@/contexts/auth-context";
import {useForm} from "@mantine/form";
import {useRouter} from "next/navigation";
import {useEffect} from "react";

interface FormValues {
  username: string;
  password: string;
}

export function LoginForm() {
  const router = useRouter()
  const { user, login, isLoading } = useAuth();

  const form = useForm<FormValues>({
    initialValues: {
      username: "",
      password: "",
    }
  })

  const handleSubmit = (formValues: FormValues) => {
    login(formValues)
  }

  useEffect(() => {
    if (!!user) {
      router.replace('/chat')
    }
  }, [!!user])

  return (
    <form
      className={cn("flex flex-col gap-6")}
      onSubmit={form.onSubmit(handleSubmit)}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">
          Войти в аккаунт
        </h1>
        <p className="text-balance text-sm text-muted-foreground">
          Введите ваш email, чтобы войти в аккаунт
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="email">
            Электронная почта
          </Label>
          <Input id="email" type="email" placeholder="m@example.com" required {...form.getInputProps('username')} />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Пароль</Label>
            <a
              href="#"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Забыли пароль?
            </a>
          </div>
          <Input id="password" type="password" required {...form.getInputProps('password')} />
        </div>
        <Button
          type="submit"
          className="w-full"
          loading={isLoading}
        >
          Войти
        </Button>
      </div>
      <div className="text-center text-sm">
        Нет аккаунта?{" "}
        <a href="#" className="underline underline-offset-4">
          Зарегистрироваться
        </a>
      </div>
    </form>
  )
}
