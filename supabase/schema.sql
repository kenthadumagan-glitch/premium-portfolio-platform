-- profiles
CREATE TABLE IF NOT EXISTS public.profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name text,
  bio text,
  email text,
  avatar_url text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- folders
CREATE TABLE IF NOT EXISTS public.folders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  owner_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  name text NOT NULL,
  parent_id uuid REFERENCES public.folders(id),
  created_at timestamptz DEFAULT now()
);

-- files
CREATE TABLE IF NOT EXISTS public.files (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  owner_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  folder_id uuid REFERENCES public.folders(id),
  path text NOT NULL,
  name text NOT NULL,
  mime_type text,
  size bigint,
  public boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- notes
CREATE TABLE IF NOT EXISTS public.notes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  owner_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  title text,
  body text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- messages
CREATE TABLE IF NOT EXISTS public.messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text,
  message text NOT NULL,
  received_at timestamptz DEFAULT now(),
  is_read boolean DEFAULT false
);

-- activity logs
CREATE TABLE IF NOT EXISTS public.activity_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  owner_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  action text,
  meta jsonb,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.folders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.files ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.notes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.activity_logs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "profiles_select_own" ON public.profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "profiles_insert_own" ON public.profiles FOR INSERT WITH CHECK (auth.uid() = id);
CREATE POLICY "profiles_update_own" ON public.profiles FOR UPDATE USING (auth.uid() = id) WITH CHECK (auth.uid() = id);

CREATE POLICY "folders_select_own" ON public.folders FOR SELECT USING (auth.uid() = owner_id);
CREATE POLICY "folders_insert_own" ON public.folders FOR INSERT WITH CHECK (auth.uid() = owner_id);
CREATE POLICY "folders_update_own" ON public.folders FOR UPDATE USING (auth.uid() = owner_id) WITH CHECK (auth.uid() = owner_id);
CREATE POLICY "folders_delete_own" ON public.folders FOR DELETE USING (auth.uid() = owner_id);

CREATE POLICY "files_select_own" ON public.files FOR SELECT USING (auth.uid() = owner_id);
CREATE POLICY "files_insert_own" ON public.files FOR INSERT WITH CHECK (auth.uid() = owner_id);
CREATE POLICY "files_update_own" ON public.files FOR UPDATE USING (auth.uid() = owner_id) WITH CHECK (auth.uid() = owner_id);
CREATE POLICY "files_delete_own" ON public.files FOR DELETE USING (auth.uid() = owner_id);

CREATE POLICY "notes_select_own" ON public.notes FOR SELECT USING (auth.uid() = owner_id);
CREATE POLICY "notes_insert_own" ON public.notes FOR INSERT WITH CHECK (auth.uid() = owner_id);
CREATE POLICY "notes_update_own" ON public.notes FOR UPDATE USING (auth.uid() = owner_id) WITH CHECK (auth.uid() = owner_id);
CREATE POLICY "notes_delete_own" ON public.notes FOR DELETE USING (auth.uid() = owner_id);

CREATE POLICY "messages_insert_public" ON public.messages FOR INSERT WITH CHECK (true);
CREATE POLICY "messages_select_private" ON public.messages FOR SELECT USING (auth.role() = 'authenticated');
CREATE POLICY "messages_delete_private" ON public.messages FOR DELETE USING (auth.role() = 'authenticated');

CREATE POLICY "activity_select_own" ON public.activity_logs FOR SELECT USING (auth.uid() = owner_id);
CREATE POLICY "activity_insert_own" ON public.activity_logs FOR INSERT WITH CHECK (auth.uid() = owner_id);

CREATE STORAGE BUCKET IF NOT EXISTS private-files WITH (public = false, file_size_limit = 52428800);
