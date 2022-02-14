import React from "react";
import { useUser } from "hooks/useUser";
import { ChatForm } from "components/ChatForm";
import { EnterForm } from "components/EnterForm";

export const MessagesHeaderForm: React.FC = React.memo(() => {
  const { isSignedIn } = useUser();
  return <>{isSignedIn ? <ChatForm /> : <EnterForm />}</>;
});

MessagesHeaderForm.displayName = "MessagesHeaderForm";
