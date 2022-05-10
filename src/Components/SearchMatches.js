import SearchFilters from "./SearchFilters";
import SearchResult from "./SearchResult";
import { useEffect } from "react";

export default function SearchMatches() {
    
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
    return (
        <>
            <main class="browse-section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 col-md-5">
                            <SearchFilters />
                        </div>
                        <div class="col-lg-8 col-md-7 mainpage">
                            <SearchResult />
                        </div>
                    </div>
                </div>
            </main>
        </>
        );
}