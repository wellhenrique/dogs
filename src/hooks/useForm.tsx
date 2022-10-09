import { ChangeEvent, useState } from "react"

const types = {
  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Preencha um email válido',
  }
} as any

type Types = any

export function useForm(type?: Types) {
  const [value, setValue] = useState('')
  const [error, setError] = useState<null | string>(null)

  function onChange({ target }: ChangeEvent<HTMLInputElement>) {
    if (error) validate(target.value)
    setValue(target.value)
  }

  function validate(value: any) {
    if (!type) return true
    if (value.length === 0) {
      setError('Preencha um valor.')
      return false
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message)
      return false
    } else {
      setError(null)
      return true
    }
  }

  return {
    value,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value)
  }
}
