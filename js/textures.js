var textures =
{
  ball0: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC",
  ball1: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwoKDQ0OCg4NCA0KEA0NDxAJCA8UDRAQFREWFhQRExUYKCggGBolGxMVITEhJSkrLi4uGB8zRD8wNygtLiwBCgoKDg0OFRAQFSsiIB4tLS0rKy8tKys3Ky0rLS0uLS0rKystLS0tLS0vKy0tKystLSsrKystLS0tLS0rLS0tLf/AABEIAJ8BPgMBEQACEQEDEQH/xAAbAAEBAAMBAQEAAAAAAAAAAAAAAQMEBQIHBv/EADMQAQACAQICBQsEAwEAAAAAAAABAgMEEQUhMVFhcYEHEiIyNEFzdJGxszWhstFCYnIT/8QAGwEBAQACAwEAAAAAAAAAAAAAAAEDBAIFBgf/xAApEQEAAgIBAwQCAQUBAAAAAAAAAQIDEQQFMUEGEiEiMlFxYYGRobEU/9oADAMBAAIRAxEAPwD6a+Pu2AAAAEBQQAAAFABAUAAAAEAAAABQQFABAUAEBQAQFABAUWCBAAAAAAAAAAAAAAAAAEBQAQFAAAAAAAAAAAAAAAAAFggRAAUAAAAEABQAQAAAAFBAAAAAAAAAUAAAEAABQQFABAUWCBAAAAEBQAAAAQFAAAAAAAAAAAABAAUAAAAAAAAAAAAWCBAAAAAEBQAAAAAAAAAAQFBAAAAAUAEBQAAAAAAQFABAUWCBAAAAAAAAAAAAAAAAAAAAAEABQAAAAQFABAUAAAAAAWCBAAAAAEBQAQAAFAAAAAABAUAAEAAAAAAAAABQAAAAABYIEQAFAAAAA0PePFe/qx4z0N3idPzcmfpHx+57OFsla92xGi67fSHe09NRH55f8MM8j9Ql9HP+M798bMWb05eI3ivtY5H7a1qzWdrRtLz+bBkw29uSupZ4tE9kYlAAAEBQQAAFBAAAAAUZMWG9+iNo65dhw+mZ+V80j4/cuFsla92xGi67fSru6em66+2RgnkfqHm+jtHqz53fDXz+nclY3jvtyrnie7WtExO08p7Xn8uK+K00vGphniYnsjGoAAoAAAsECAAAIACgDJgx+fbbxnub/TuH/wCrNWnjz/Dhkv7YdKtYrG0coh9Aw4qYqRSkaiGjMzMtDjnGdFwnT21PEMsaXBjmtZvOO9udp2rEVrEzPPqhmrEz8Qm27jyVvWtqTF63iLVms8piY3iYcZNPObFF42np90tHn8KnLxzFu/iXOl5q50xMbxPKYfPb0mlprPhvRPxCOCgAAAAACAoAAAAAy6fF/wClufRHOf6dp0ngTys2p7R3Y8t/bDoxG3Ry7nvaUrSPbWNRDR3M/Mudxzjug4VTHk4hmro6Z8tcFJvS8xOS28xHoxO3RPOeUMkRNiZdJx7DDqMMXj/aOj+nV9U6fXk4p1H2jtLJivNZc54GY1Opb2xAQFAAAFggQAAAAAAG5oI5Wnt2eu9N49Y8l/O9NbkT8xDaela0vwHlz/Qc3x9N/Nkxfkln7Pgvsmk+Xwfjhwt3khupvSudq42vPbtLwnXMcU5dteYif7y3cM7qwunZQAAAAAAAAAAAAJb2hj0N+uXtfT+KI4028zLTzz9tNl3zC+XeX32Hh3z9Px3ZsXlxl9QYvMuSkToczURte31+r531THGPlZKx2238c7rDG69zAAAAAWCBAAAAAAAbmht60eL1fpzNGr49/PdrciO0tt6hrPn/AJc/0HN8fTfzZMX5JL9nwX2TS/AwfjhwnvJDcRXP1Vt7z2bQ8D1nLGXl2mPGobuKNVYXVMoAAgKAAAAAAAAAN7Q29GY6p+72fp/NE4LU/U/9amePttsPQT8MD5f5fPYeHfP4/wAd2XF5cZfUGOe7kJMjm57ede09v25PnXUssZeVkvXtMt/HGqwxtFzAAAAAWCBAEBQAAAB7x3mkxMe77Nnh8q3Hy1yV8ONq+6NS6OPJW8b15/d9B4vKx8jHF6S0bVmvxLzqMGLPSaZqUz0ttvTNji1J2neN4nlLaiZhxZE+Rh1GeKRtHrT+3a6jqnU68WntrO7Sy48c2lz3hLTuZmW72EAAAAAAAAAAAAAGTDkmlomOj39ze6fzbcTNGSO3mHC9ItDo0vFo3jnD33Hz481PdS24aVqzWdPGfT4s0RGbHTPFLVvWMuOtoi1Z3raN+iY62xEz4cWVBr6nP5sbV9af2dF1fqlcNJxY5+0/6ZsWLfzLQeJluAAAAAALBAgAACAoAAAtbTWd6zt3MuLPkw292O0wk1ie8M8avJHTtPg7inqDlVj7alinBVLarJPVXuhjzdc5WSPbvX8LGGsMDqLWm07mdsutDiCAAoAAAAAAIAAACgD1S9q86zs2MHKy4J3jtpxtWLM0ay/VE+Dtq+oeRr7REsU4KvN9Tkt7/N/5hr8jrXKzRreo/o5xirDC6qZme7JHwIACAoAICiwQIAAAAAAAAAAAAAAAAAAAAgAKAACAoAAAAAAAAAAAAsECAIAAAACgAgKACAAoAIAACggAKACAoAAICgAgAAAAAKCAosECAAAAAICgAAAAAAAAAAAAAAAAAAAAgKAAAACAoAAAAsECAAIACgAAAAAAAAgKAACAoICgAgKAAACAAoICgAAAgKCAosECAAAICgAAAAAAAAAAAAAgAKCAoAAICgAAAAAAAAAAACwQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACwQGxoDQmxoNjQpoDQGgNAaA0BoDQGgNAaA0BoDQGgNAaA0BoDQGgNAaA0BoDQGgNAaA0BoDQGgNAaCFiB//Z",
  ball2: "data:image/jpeg;base64,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",
  ball3: "data:image/png;base64,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",
  ball4: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRauvRhUG21DSwFZTyJ9r-v8qxymAs7a_2mXkehqn9zE9h2pNxX",
  ball5: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYg8PNcXwkC_FHlyq9CXpuClqzCKsQJKs_V17SQZzHKJQuJc0T",
  ball6: "data:image/jpeg;base64,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",
  ball7: "data:image/png;base64,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",
  ball8: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT0AAACfCAMAAAC85v7+AAAAgVBMVEUAAAD38tQODg7/+9z//N369df9+Nn//t708NLU0Ladmofa17xVU0mDgXFqaFvn5MdFRDt7eWp1c2XKx67Cv6c9PDVZWE2LiHdkYlbu6s0kIx+opZGTkX9vbV/i38MzMywYGBW9uqMqKiShnopOTEOxrpg8OzMeHRoUFBInJyKnpJArkdMoAAAEUUlEQVR4nO3a226jMBAGYBxjkxMLgSSEHEhokzbp+z/g2jTZztBApdWuhov/u9iViFT9ss0wNgQBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeKPtSTpCn+vtKh2hwy2uK2WsMWU+PUuH+e5YLBMfT5X5PpUO03aYWDdwqmFsmEylA3GLmX7EM8bqqpAORK2r8D5y6jGAai8d6kuW6FY8PY6lQ/1Rt8auoauB3CCj/Fm8cHKTDta4VfZ7uGb9LaSjeem4I55aS0dzjuMnM3uf3wHcvWvbGU8fpMMF792Dp1QkXl3S5wvvPrsb6XhJz+C5fHPheH1zq5R9kU136ZtbZywbb9I7eMpUounmEU9jteV1xl4k4y1CvtR8PHZFi/alMzpUVtVxttglmuaL3gTjjdnYlZc4iy8lGz8zkku3oXOr6/vVmOYzS7l4BZ1HvbtfndKr9lUuXk6WnsndhdHc1+EFS30Si1eReE0JeZ/7MK90duUK85XG0EdXBk2k9+3YYnvKlN4Z1l3IbGQz9z+9dcNfUvHYGiuDzzKot/xJbCZS8abtFK59MX6t5e01KYK1K4m7UPrJdNvb3SDuDdquNKNn72uQFRyxpoU9cfXVjVpkdNX+IToKxSvpHdqsudDovP2DEUrXSuEfuUW+OwXBgbVZWqiysKr8+XCd5s2/7IdQanJZO6XCR4Hb8xZa6qjlhbfK0aOhuvB4WmgzOWIpTPk4jx8t+awLHRW8sdEz1WONbScsnpY6qOKjd3LTnZczf5+y7eUg1p7xLUE6KSd+iitWr6UOMmjdsx/+glUmcmlS1i4LHaOd2J7C3QBX4zoW7dr5jP4iVvfoHOpNEKz9bFtfX+jkhiuheHRyteujYj9o1nXzIzauUjvdmo6eKx8bn6rZ2NLgYi0B7Zv8kts3/Z5/6pLRM4lUvIKUX1/d3n2qsGjFm0nFoz27r25n/7D1O7MjjVf//If+jxeawi+5fWQj37ccyA9W7AhtTR4b1p+wXFw8P1h7Oqxyr67YveGfXauiaY3pcb3YVsPVD7qf9Yc/58K3J1dSVuTqSuuYwDzesWxn7Q2mEHoU9dWOrspBHBIEfHbdZqNYr85Zzc7mQ8m3pjSI2+LG67f5Ysm+Kwgl3wtlbNdjrNaav9eQXHqtY+Rn8WRfuwSTH96p+dM+Qf3vS8Vf+QWqN18k/DHGUfelU5H06+ZzX75w9/Mf+L8OUV88+Q/RNt3DF4p1ol/i7uELh/CR4bzr5g0/pKN5WcdnQEbLrzzvNnu2/KzKpIN9SpOn8cohfIDWKFT70Wv08l061R+vth3PatlWpWVakk7KWLsc1Iff291YP76qVsZoc5HbPj63uVRGe7ZcxifpNN8c6uQzninrQXzT+t1qvp6fT9IpOqUuXir42Q8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPxzI/h7vwF8ri+/l5jwOwAAAABJRU5ErkJggg==",
  ball9: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACeCAMAAACcjZZYAAAAsVBMVEX38tT+7QH+7QD28tn673/38tv871UAAAD38tb/+9z38tj899j289759db//Nz38sL58J/773P68IrZ1bv58aheXVH38sCSj32LiXj38s2wrZfo5Mf97jIuLSjGw6oREQ+9uqP872YgIBxXVkunpJCCgHDu6s3773F4dmf97kD58Jr48bT+7ST38sr68JD87ko4NzBsal1LSkGpppKQjXwWFhPQzbP48a3772cqKiRDQjm26dgIAAAF5klEQVR4nO2c21LjOBRFFTmOLct2yP1G5wJJCBCguQzQ/P+HjeQ4jWSgHzjqkmtmr6KA4gF2LUlHsiTDGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgf0YACLAmIMA4IMAagAD0kYA+EtBHAvpIQB8J6CMBfSSgjwT0kYA+EtBHwq0+9RDt9Pe5xnk+Z/rsnQhXv9UZfymeI30q0v716qXdbg/7t6va9UKtrNXtD1W+66vOqbt4TvSpOJ1hGiZxQRAG16+NGgnU7l6SMDjES8K03XUVz4U+zrtxGJsnAHE4uaiNPyWvndrxguDKTQ+k6+P8bhJ8PEMJh6f18McbL7a8wxFP/OrCH1kfb3Q/SVc08Wsd/PE7lnx6RpaeOPBH1cf5SfrVIV7a9e+Pr76MF17T/RH1KXvhV/GUv6Zvf7z1pT01gIdkf1R93T/YU/5Wfv3xy0+qstH/+lR/NH289Ud7qoH3Pv1xPvm0LL83b8envmq8TEqZWfliB/WFEO/Kbt0P8cjNS9NnDd1MzJbT5UxYCX0OX35qFT7B5tNlT0jzZ0nfnz7Ozb4nZ+eRZrA1A8bthi9/nPeNJUuWbYp4P+bC9BdekuKR9DWNwpz1oiMzs/+lLW/69ua8kb0d403N5k1O/OlrG70vW0TRz952qfK9me1LHR6EeGbrCt33ltveQ7V5Y1JxJujje6O0yKnKpYateFZf52b7Zp4mD86HRutudbcTTGZnUbQzmzckjQ6Kvguzde9VrFx9k79V8qW06vL9eA2j8kk9KnQ8uVbfGOlYcOtL362hL1ej4kl3OrGLojOz94XUtdV3490ZywJt7azQN1f6esboVUsrwh+h1L5rY3DkatrdiLIbRmZxSUjN+334hanv8dj75tXJ48ZX7zNrixhH0S+hV87VuZc4t30/nrUu0CW5p6zlanBEj6a+gFKbKfqsiVevWzZ5ng2q+mJPUy/vmusW+UstDLZ5rktftK6dPpYXq9KHcuVnDt566Hsu4qnV1aIuvW9oPfAe/EXnj9Xa523wWg+8RdHTi6pq7Yt91b6+vZ0hZuvNaK6HhzXzBp42TfnK3qySbDoeT+VM6Xs2a8vQlz5rdGRMPY1LmemZ995al3raNKhsGMgek0IlXFbWfbTSTNHXsvSdHVbLWXVwpJ62/DifmPbGB2u5at2B2boBaUecoo+b+vRTkep/RQW0ninbvnb8rOIi1Lp0nMv8uTJ2WUg6ECRtGVj59IplvdSfl3Uofbr4metmPWh3S9UHo/vcXeuS9Flb9dsf5YbQ2t5Q87Zdz7nZy8SmjDewtnND2mkWbbvUWjhn659q0t31LHsJ+TSGkM987mBifr6IFudLKx5jtHi0zfr3Y0CpDzrUqBAiY9LYb/Z5VmRMHlnGhBTZNhNSRWW/OyCx81GPivpl+8pp9GNeLAyE2O6it2M+f5WvyHc8I89m/0RrluuVldA7k8ctF/K8RjyobJRHbUI/rS0Gm9FoVzy3lfli+kE0KR4/OTRvseESPexGo/FAPbRFo3J4BNR7ONRj8vIcuthsfuf8EC9m3s6Jyni8nRx6nxXvuKWRkm/hkO+4lGtn2bv/HW5Rzr1x7P2SFec3B3/s6V3eblvao98hod+wukuK8ZsJ9vw4Go9H0+NRajLxbq848Ti0rxC96fppPHp8ZuVJdOrgCqKD+337drn8y2QxeZSzRurzgsE7vHG8AlbGK2eNgN3V4IJao7hcGny4iROwTi3sFZdLP17fjJ3c7nN1OXd/FZi3c+OQdWt0O5zz5iQ1jt3iIOyfuonn5ma9vhv+wtIgCNVHOumvaiSvcbgbfnKThsX/DkmT6+beVT5X73Xoq/+nq06zebHa1/DFjiJS66LZ7KwuXb7Z4e6tojq/FKP5K/nwThsJ6CMBfSSgjwT0kYA+EtBHAvpIQB8J6CMBfSSgjwT0kcC/fiXBWoAACwGB6hkKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOC/zr/66aw1j6G55gAAAABJRU5ErkJggg==",
  ball10: "data:image/png;base64,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",
  ball11: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAAllBMVEX38tTlMRjkHwD499jkEgDwsJb168wAAAD4+9z/+9z899j589Xq58o8PDTJxazl4cRUUkiysJrlKxDlJwnxyKzlKQz03sHwvqPrjHToY0zpa1Tz2r3sknrnXUbz1bjtm4LmTznlNhzqg2vlPSX15cfmRS3wt5zup43nVkDpd2B5d2nSz7VFRDyIhnVgXlO5tp+joIwlJSCp9ntrAAADk0lEQVR4nO3ba1PaQBiG4TW7JSFoW5eDAgpWQIo92P7/P9cIU5s4BGmfbXft3NcHp5/oO/cmAZLFGAAAAAAAAAAAAAAAAAAAAAAAAADA8ToQGAeBOYGAfBLyScgnIZ+EfBLyScgnIZ+EfBLyScgnIZ8kaD7vh977kK8Y1na+oK8YLJ/PXLYaTybXq+of6SX0/cwtrieT8U013jDYywbK13fX65mxRcWa2fzGhZswBO8WV4POdrzCTN9MsizQCwfJ188uR4W1P29gW1vMNi6dI9C78cAWT+NVq7yc+zABQ+Rzm2Xx7BGALabXoVZYla0GtXY7hbkMsr56Pp9dPI+3C7h2AebTuUv7PN424GzR119czjdcLPdNtx2wn8AJ7O72Le7j+poA54eaz686LfWqAUfxP8W4QUu9x/Udy/3EfP5De72q3zT29c/tvbA8zfdR/YAg5nPTA/Wq9b2Ie/3L5ofqGdNRzw4tX7Y+PJ4pbmMef/7jC+PZgbi8Uj5/Ux+va8rt325jwphXPzeqnxtlr3ya8ml5N9rbr5TPDerjneXnpene5/f1+ew63uHXv62v7un3/KE05df8S32+pTaekq9xbvTe5vlZ15zmeX7aOD/iHX5uWT/2zvP8fbf3rpqvcfjdSoefki+7qx18ZS1frz7fVYBPp39kOKkffC357Ey6+kn5OvXxWvKJ8ynj3TWufPvzmWKlnB5CPj9urG5LPlPEOntdfXXb810qZ4eQL5s3Vrc13ybOzSu/aHxqactnL5Q3DyXfxVH57DzOe+9wc1Q+M1UuLkq+2XH57uLk6181vhC15utEOvrcqDFeaz7p7Phz2fq4fNInXyXfsjFea75B4vk+CP8JR1+so49rH++8xoxivfPyue9ffOsQppMk/q3juO+8hu+8x8zHHZff1bzf9ynPP3eNSfZ+30Oef90tbyL3+5p3m8svnz/1qkU+O0/zbnPv/v270pTfzh4Sudv87FlH2e1t/zY/F8R91mFemC/qsw6etP3d57yW57wHve5dBkXsXQYnw5VJeo9LlvQel8M7rIbR66W+w+rg/r4E6qW+v++E3aWq3d7mX+2S39vcSWlv88mr2llvR6ntrH/0an7X0U/wdx07fivkK4YV/kdP/KZNQj4J+STkk5BPQj4J+STkk5BPQj4J+STkk5BPYjIIzBsIjIVg/0M8AAAAAAAAAAAAAAAAAAAAAAAAAP+vH2BRnFxHFRgIAAAAAElFTkSuQmCC",
  ball12: "data:image/png;base64,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",
  ball13: "data:image/png;base64,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",
  ball14: "data:image/png;base64,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",
  ball15: "data:image/png;base64,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"
};
