import { useRouter } from "next/router";
import { FaSearch, FaTimes } from "react-icons/fa";

interface SearchProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Search({ isOpen, onClose }: SearchProps) {
<<<<<<< HEAD
  const router = useRouter();

  if (!isOpen) return null;
=======
 const router = useRouter();

 if (!isOpen) return null;

 const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
>>>>>>> 47ff67d (2 commit)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const keyword = formData.get("search") as string;

    if (!keyword.trim()) return;

    onClose();

    router.push(`/search?query=${encodeURIComponent(keyword)}`);
  };
 return (
  <div className="fixed inset-0 z-[9999] bg-white">
   <button onClick={onClose} className="absolute right-6 top-6 cursor-pointer text-2xl">
    <FaTimes />
   </button>

   <div className="mx-auto w-full max-w-[470px] px-5 pt-10 md:pt-20">
    <div className="flex h-[38px] items-center rounded-full bg-[#f5f5f5] px-4">
     <form onSubmit={handleSubmit} className="flex h-[38px] items-center rounded-full bg-[#f5f5f5] px-4">
      <FaSearch className="mr-2 text-sm text-[#666]" />

      <input
       name="search"
       type="text"
       placeholder="Search"
       className="w-full appearance-none border-0 bg-transparent text-sm outline-none focus:border-0 focus:outline-none focus:ring-0"
      />
     </form>
    </div>

    <div className="mt-12">
     <h3 className="mb-5 text-sm font-bold text-primary">Shortcuts</h3>

     <div className="flex flex-col gap-3 text-sm text-[#525354]">
      <button className="cursor-pointer text-left hover:text-primary">Find your Rolex</button>

      <button className="cursor-pointer text-left hover:text-primary">Configure Rolex watches</button>

      <button className="cursor-pointer text-left hover:text-primary">Frequently Asked Questions</button>
     </div>
    </div>
   </div>
  </div>
 );
}
