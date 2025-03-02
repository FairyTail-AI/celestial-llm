"use client"

import {useRouter} from "next/navigation";
import {useRequireAuth} from "@/contexts/auth-context";
import {useEffect} from "react";
import {LoaderFull} from "@/components/loader-full";

export default function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode;
}){
  const router = useRouter()
  const {isLoading, isAuthenticated} = useRequireAuth()

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.replace('/login')
    }
  }, [isLoading, isAuthenticated])

  if (isLoading) {
    return <LoaderFull />
  }

  return (
    <>
      {children}
    </>
  )
}