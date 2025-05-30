import { type ReactNode, useState } from "react";
import {
  Box,
  Flex,
  Icon,
  Text,
  useDisclosure,
  type BoxProps,
  CloseButton,
  IconButton,
  HStack,
  type FlexProps,
} from "@chakra-ui/react";
import {
  FiBox,
  FiShoppingCart,
  FiFileText,
  FiTag,
  FiLogOut,
} from "react-icons/fi";
import type { IconType } from "react-icons";

interface LinkItemProps {
  name: string;
  icon: IconType;
  path: string;
}

const LinkItems: Array<LinkItemProps> = [
  { name: "商品管理", icon: FiBox, path: "/admin/products" },
  { name: "訂單列表", icon: FiShoppingCart, path: "/admin/orders" },
  { name: "文章列表", icon: FiFileText, path: "/admin/articles" },
  { name: "優惠券管理", icon: FiTag, path: "/admin/coupons" },
];

export default function AdminLayout({ children }: { children: ReactNode }) {
  const { onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh">
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />

      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  const [activePath, setActivePath] = useState("/admin/products");

  return (
    <Box
      transition="3s ease"
      borderRight="1px"
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          管理後台
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem
          key={link.name}
          icon={link.icon}
          path={link.path}
          active={activePath === link.path}
          onClick={() => setActivePath(link.path)}
        >
          {link.name}
        </NavItem>
      ))}

      <NavItem icon={FiLogOut} path="/logout" color="red.500">
        登出
      </NavItem>
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  path: string;
  children: ReactNode;
  active?: boolean;
}

const NavItem = ({ icon, children, active, ...rest }: NavItemProps) => {
  return (
    <Box
      as="a"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        bg={active ? "blue.50" : "transparent"}
        color={active ? "blue.500" : "inherit"}
        fontWeight={active ? "bold" : "normal"}
        _hover={{
          bg: "blue.50",
          color: "blue.500",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "blue.500",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Box>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}

const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      borderBottomWidth="1px"
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
      />

      <Text
        display={{ base: "flex", md: "none" }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
      >
        管理後台
      </Text>

      <HStack alignItems="center">
        <Flex alignItems={"center"}>
          {/* <Menu>
            <MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: "none" }}>
              <HStack>
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
                <VStack display={{ base: "none", md: "flex" }} alignItems="flex-start" spacing="1px" ml="2">
                  <Text fontSize="sm">管理員</Text>
                  <Text fontSize="xs" color="gray.600">
                    Admin
                  </Text>
                </VStack>
                <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            
          </Menu> */}
        </Flex>
      </HStack>
    </Flex>
  );
};
