const [listings, setListings] = useState(null);
const [loading, setLoading] = useState(true);
useEffect(() => {
  async function fetchListings() {
    const listingRef = collection(db, "listings");
    const q = query(listingRef, orderBy("timestamp", "desc"), limit(5));
    const querySnap = await getDocs(q);
    let listings = [];
    querySnap.forEach((doc) => {
      return listings.push({
        id: doc.id,
        data: doc.data(),
      });
    });
    setListings(listings);
    setLoading(false);
  }
  fetchListings();
}, []);
if (loading) {
  return <Spinner />;
}
if (listings.length === 0) {
  return <></>;
}
