import { SupabaseClient } from "@supabase/supabase-js";
import { useEffect, useMemo, useState } from "react";
import supabase from "../config/supabaseClient";


function useFetchSupabase(fn: (supabase: SupabaseClient) => void) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [querying, setQuerying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  console.log("useFetchHook loaded")

  const memofn = useMemo(() => fn, [fn]);

  useEffect(() => {
    if (querying) return;
    console.log('fetching data')
    const getData = async () => {
      const { data, error } = await memofn(supabase);

      if (data) {
        setData(data);
        setQuerying(false);
        console.log('got data from hook', data)
      }

      if (error) {
        setError(error);
        setQuerying(false);
        console.error(error);
      }

    }

    setQuerying(true);
    getData();

  }, []);


  return [data, error, isLoading];
}


export default useFetchSupabase;