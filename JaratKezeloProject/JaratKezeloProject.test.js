import { beforeach, it, expect, describe } from 'vitest';
import { JaratKezeloProject } from './JaratKezeloProject';

let jarat = new JaratKezeloProject();
beforeach(() => {
    jarat = new JaratKezeloProject();
})

describe('ujJarat', () => {
    it('létrehoz egy új járatot, ha érvényes adatok vannak megadva', () => {
        jarat.ujJarat("ABC-123", "Retér1", "Reptér2", "2024-06-02 12:05")
    });

    it('hibát dob ha a járatszám null', () => {
        expect(() => {
            jarat.ujJarat(null, "Retér1", "Reptér2", "2024-06-02 12:05");
        }).toThrow("null")
    });

    it('hibát dob ha a járatszám üres', () => {
        expect(() => {
            jarat.ujJarat("", "Retér1", "Reptér2", "2024-06-02 12:05");
        }).toThrow("üres")
    });


    it('hibát dob ha a reptérHonnan null', () => {
        expect(() => {
            jarat.ujJarat("ABC-123", null, "Reptér2", "2024-06-02 12:05");
        }).toThrow("null")
    });

    it('hibát dob ha a reptérHonnan üres', () => {
        expect(() => {
            jarat.ujJarat("ABC-123", "", "Reptér2", "2024-06-02 12:05");
        }).toThrow("üres")
    });

    
    it('hibát dob ha a reptérHova null', () => {
        expect(() => {
            jarat.ujJarat("ABC-123", "Retér1", null, "2024-06-02 12:05");
        }).toThrow("null")
    });

    it('hibát dob ha a reptérHova üres', () => {
        expect(() => {
            jarat.ujJarat("ABC-123", "Retér1", "", "2024-06-02 12:05");
        }).toThrow("üres")
    });

    it('hibát dob ha a kettő reptér ugyan az', () => {
        expect(() => {
            jarat.ujJarat("ABC-123", "Retér1", "Reptér1", "2024-06-02 12:05");
        }).toThrow("ugyan az a kettő reptér")
    });
    
    it('hibát dob ha az indulás null', () => {
        expect(() => {
            jarat.ujJarat("ABC-123", "Retér1", "Reptér2", null);
        }).toThrow("null")
    });

    it('hibát dob ha az indulás üres', () => {
        expect(() => {
            jarat.ujJarat("ABC-123", "Retér1", "Reptér2", "");
        }).toThrow("üres")
    });
});

describe('keses', () => {
    it('hibát dob ha a járatszám null', () => {
        expect(() => {
            jarat.keses("null", 10)
        }).toThrow("null");
    });

    it('hibát dob ha a járatszám üres', () => {
        expect(() => {
            jarat.keses("", 10)
        }).toThrow("üres");
    });

    it('hibát dob ha a késés null', () => {
        expect(() => {
            jarat.keses("ABC-123", null)
        }).toThrow("null");
    });

    it('hibát dob ha a késés üres', () => {
        expect(() => {
            jarat.keses("ABC-123", "")
        }).toThrow("üres");
    });


    it('a késés megváltozik, ha érvényes adatok vannak megadva', () => {
        jarat.keses("ABC-123", 10);
        expect(jarat.keses("ABC-123")).toBe(10)
    });


    it('a késés összeadódik, ha többször ugyan arra a járatszámhoz adjuk hozzá', () => {
        jarat.keses("ABC-123", 10);
        jarat.keses("ABC-123", 20);
        expect(jarat.kesesLekerdezes("ABC-123")).toBe(30);
    });


    it('a késés a megfelelő járatra adódik, ha több járatszám van megadva', () => {
        jarat.ujJarat("ABC-123", "Retér1", "Reptér2", "2024-06-02 12:05");
        jarat.ujJarat("ABC-321", "Retér1", "Reptér2", "2024-06-02 12:05");
        jarat.keses("ABC-123", 10);
        jarat.keses("ABC-321", 20);
        expect(jarat.kesesLekerdezes("ABC-123")).toBe(10);
        expect(jarat.egyenleg("ABC-321")).toBe(20);
    });
});



describe('mikorIndul', () => {
    it('hibát dob ha a járatszám null', () => {
        expect(() => {
            jarat.mikorIndul("null")
        }).toThrow("null");
    });

    it('hibát dob ha a járatszám üres', () => {
        expect(() => {
            jarat.mikorIndul("")
        }).toThrow("üres");
    });
});


describe('jaratokRepuloterrol', () => {
    it('hibát dob ha a reptér null', () => {
        expect(() => {
            jarat.jaratokRepuloterrol("null")
        }).toThrow("null");
    });

    it('hibát dob ha a reptér üres', () => {
        expect(() => {
            jarat.jaratokRepuloterrol("")
        }).toThrow("üres");
    });
});