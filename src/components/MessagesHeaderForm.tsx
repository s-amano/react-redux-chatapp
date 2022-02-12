import React from "react";
import { useUser } from "../hooks/useUser";
import { ChatForm } from "./ChatForm";
import { EnterForm } from "./EnterForm";

export const MessagesHeaderForm: React.FC = React.memo(() => {
  const { isSignedIn } = useUser();
  return <>{isSignedIn ? <ChatForm /> : <EnterForm />}</>;
});

MessagesHeaderForm.displayName = "MessagesHeaderForm";
