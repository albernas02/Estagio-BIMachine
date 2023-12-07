import { FormProvider, useForm } from "react-hook-form";
import { ButtonContainer, DivContainer } from "./styles";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { toast } from "react-toastify";

const newUserValidationSchema = zod.object({
  name: zod.string().min(1, "Informe um nome válido"),
  phone: zod.string().min(9, "Informe um número válido").max(15),
  email: zod.string().email("Informe um e-mail válido"),
  city: zod.string().min(3, "Informe uma cidade"),
});

type UserData = zod.infer<typeof newUserValidationSchema>;

interface User {
  name: string;
  phone: string;
  email: string;
  city: string;
}

interface UserFormProps {
  onClose: Function;
  userData?: User;
}

export function UserForm({ onClose, userData }: UserFormProps) {
  const methods = useForm<UserData>({
    resolver: zodResolver(newUserValidationSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      city: "",
    },
  });

  const { handleSubmit, formState, setValue } = methods;

  const { errors } = formState;

  async function handleCreateEditUser(data: UserData) {
    try {
      let response = await axios.post("http://177.0.0.0.1:3333/customer", {
        name: data.name,
        phone: data.phone,
        email: data.email,
        city: data.city,
      });

      toast.success("Muito obrigado pela confiança");

      if (response) {
        window.location.href =
          "https://register.bimachine.com/?origin=site&suborigin=home-button-top";
      }
    } catch (error) {
      console.log("Hello");
      toast.error("Erro ao cadastrar");
    }
  }

  return (
    <>
      <FormProvider {...methods}>
        <DivContainer>
          <form onSubmit={handleSubmit(handleCreateEditUser)}>
            <Input label="Nome" id="name" error={errors.name?.message} />
            <Input label="E-mail" id="email" error={errors.email?.message} />
            <Input label="Telefone" id="phone" error={errors.phone?.message} />
            <Input label="Cidade" id="city" error={errors.city?.message} />
            <ButtonContainer>
              <Button label="Fazer teste grátis" />
              <Button
                label="Continuar lendo"
                variant="danger"
                onClick={() => onClose()}
              />
            </ButtonContainer>
          </form>
        </DivContainer>
      </FormProvider>
    </>
  );
}
