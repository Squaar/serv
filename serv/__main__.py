from . import serv

def main():
    s = serv.Serv('serv').run(host='0.0.0.0')

if __name__ == '__main__':
    main()