import React, { ReactNode } from "react";
import { QueryClientProvider, QueryClient } from "react-query"

type Props = {
    children: ReactNode
}
const queryClient = new QueryClient();

export const Providers = ({children}: Props) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)