import { Box } from "@chakra-ui/react";
import { CircularProgress } from "@chakra-ui/react";
export default function CircProgress() {
  return (
    <Box>
      <CircularProgress isIndeterminate color="orange.400" thickness={"12px"}>
      </CircularProgress>
    </Box>
  );
}
