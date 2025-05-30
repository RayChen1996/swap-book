import { Button, HStack, Input } from "@chakra-ui/react";

export default function SearchArea() {
  return (
    <footer className="text-center py-4">
      <HStack className=" max-w-md mx-auto justify-center">
        <Input
          type="text"
          placeholder="Search"
          className="border rounded px-2 py-1"
        />
        <Button className="ml-2 px-4 py-1 bg-primary text-white rounded">
          Search
        </Button>
      </HStack>
    </footer>
  );
}
