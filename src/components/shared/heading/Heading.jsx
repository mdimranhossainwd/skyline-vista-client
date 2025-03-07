import { Text } from "@radix-ui/themes";

export const Heading = ({ heading, description }) => {
  return (
    <>
      <div className="max-w-2xl mx-auto text-center">
        <Text
          className="font-ubuntu block leading-[44px] pb-3 font-semibold"
          size="8"
        >
          {heading}
        </Text>
        <Text className="mt-10 font-medium" as="p" mb="5" size="3">
          {description}
        </Text>
      </div>
    </>
  );
};
