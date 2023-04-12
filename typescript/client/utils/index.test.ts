import { composeArticleSlug, cutTextToLength, extractArticleIdFromSlug, slugify } from "./index";

const str = "The quick brown fox jumps over the lazy dog.";

describe("cutTextToLength", () => {
  it("should cut text to length", () => {
    expect(cutTextToLength(str, 20)).toBe("The quick brown fox ...");
  });

  it("should not cut text to length", () => {
    expect(cutTextToLength(str, 100)).toBe(str);
  });
});


const str2="hello world"
describe("slugify",()=>{
    it("should slugify text",()=>{
        expect(slugify(str2)).toBe("hello-world")
    })
})

const id=12
const title='Bolddoo'
describe("composeArticleSlug",()=>{
    it("should composeArticleSlug id",()=>{
        expect(composeArticleSlug(id,title)).toBe('bolddoo-12')
    })
    
})

const slug='pinecone-1'

describe("extractArticleIdFromSlug",()=>{
    it("should extractArticleIdFromSlug text",()=>{
        expect(extractArticleIdFromSlug(slug)).toBe('1')
    })
})