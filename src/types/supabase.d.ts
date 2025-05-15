
interface Window {
  supabase: {
    auth: {
      signIn: (params: any) => Promise<any>;
      signOut: () => Promise<any>;
      user: () => Promise<any>;
    };
    from: (table: string) => any;
    storage: {
      from: (bucket: string) => any;
    };
  };
}
