const toCSSName = (name: string) =>
  name.replace(/[^a-z0-9]/g, (s) => {
    const c = s.charCodeAt(0);
    if (c === 32) return '-';
    if (c >= 65 && c <= 90) return '_' + s.toLowerCase();
    return '__' + ('000' + c.toString(16)).slice(-4);
  });

const StringService = { toCSSName };

export default StringService;
