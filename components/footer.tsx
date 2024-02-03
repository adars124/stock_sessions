"use client";

export function Footer() {
    return (
        <footer>
            <div className="container p-5">
                <p className="text-center text-muted-foreground text-sm">Copyright &copy; {new Date().getFullYear()} Stock Sessions.</p>
                <p className="text-center text-muted-foreground text-sm">All Rights Reserved.</p>
            </div>
        </footer>
    )
};