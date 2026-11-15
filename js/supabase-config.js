import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

// SETALI-HOSING SUPABASE CONFIG

const SUPABASE_URL = "https://aencnowwogqbwfpyfktg.supabase.co";

const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_DOCrCjUqlcMOH3QooacdwA_Bsmy0ycR";

export const supabase = createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);
