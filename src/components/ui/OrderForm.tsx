// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { orderSchema, OrderFormData } from "../../forms/order";
// import {
//   Box,
//   Button,
//   FormControl,
//   FormLabel,
//   Input,
//   FormErrorMessage,
//   NumberInput,
//   NumberInputField,
// } from "@chakra-ui/react";
// import { useOrderMutation } from "../../hooks";
// import { useToast } from "@chakra-ui/react";

export default function OrderForm() {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  //   setValue,
  //   reset,
  // } = useForm<OrderFormData>({
  //   resolver: zodResolver(orderSchema),
  // });
  // const toast = useToast();
  // const orderMutation = useOrderMutation();
  // const onSubmit = (data: OrderFormData) => {
  //   orderMutation.mutate(data, {
  //     onSuccess: () => {
  //       toast({
  //         title: "訂單送出成功",
  //         status: "success",
  //         duration: 3000,
  //         isClosable: true,
  //       });
  //       reset();
  //     },
  //     onError: () => {
  //       toast({
  //         title: "訂單送出失敗",
  //         status: "error",
  //         duration: 3000,
  //         isClosable: true,
  //       });
  //     },
  //   });
  // };
  // return (
  //   <Box
  //     as="form"
  //     onSubmit={handleSubmit(onSubmit)}
  //     maxW="md"
  //     mx="auto"
  //     mt={8}
  //     p={4}
  //     borderWidth={1}
  //     borderRadius="md"
  //     boxShadow="md"
  //   >
  //     <FormControl isInvalid={!!errors.name} mb={4}>
  //       <FormLabel>姓名</FormLabel>
  //       <Input {...register("name")} />
  //       <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
  //     </FormControl>
  //     <FormControl isInvalid={!!errors.email} mb={4}>
  //       <FormLabel>Email</FormLabel>
  //       <Input {...register("email")} />
  //       <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
  //     </FormControl>
  //     <FormControl isInvalid={!!errors.address} mb={4}>
  //       <FormLabel>地址</FormLabel>
  //       <Input {...register("address")} />
  //       <FormErrorMessage>{errors.address?.message}</FormErrorMessage>
  //     </FormControl>
  //     <FormControl isInvalid={!!errors.quantity} mb={4}>
  //       <FormLabel>數量</FormLabel>
  //       <NumberInput
  //         min={1}
  //         onChange={(_, value) => setValue("quantity", value)}
  //       >
  //         <NumberInputField
  //           {...register("quantity", { valueAsNumber: true })}
  //         />
  //       </NumberInput>
  //       <FormErrorMessage>{errors.quantity?.message}</FormErrorMessage>
  //     </FormControl>
  //     <Button colorScheme="teal" type="submit" w="full">
  //       送出訂單
  //     </Button>
  //   </Box>
  // );
}
