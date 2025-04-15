import { AppSidebar } from "@/components/ui/app-sidebar";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, } from "@/components/ui/breadcrumb";
import { SearchForm } from "@/components/ui/search-form";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@radix-ui/react-separator";
import { Outlet } from "react-router";

const DashboardLayouts = () => {
    return (
        <>
            <SidebarProvider>
                <AppSidebar />
                <SidebarInset>
                    <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
                        <SidebarTrigger className="-ml-1" />
                        <Separator orientation="vertical" className="mr-2 h-4" />
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem className="hidden md:block">
                                    <SearchForm />
                                </BreadcrumbItem>

                            </BreadcrumbList>
                        </Breadcrumb>
                    </header>
                    <h1 className="mt-5 ml-5">Dashboard</h1>
                    <div className="flex flex-1 flex-col gap-4 p-4">
                        <Outlet />
                    </div>
                
                </SidebarInset>
            </SidebarProvider>

        </>
    )
}

export default DashboardLayouts;
