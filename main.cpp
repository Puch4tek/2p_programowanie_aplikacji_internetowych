#include <iostream>
 
using namespace std;
 
int main()
{
    cout << "\t\tRysujemy literke A!!!" << endl;
 
    int wysokosc ;
 
    cout << "Podaj wysokosc literki: " ;
    cin >> wysokosc ;
    cout << endl <<endl ;
 
    for (int a = 0 ; a < wysokosc ; a++)    // wierzcholek
        cout << " " ;
        cout << "A" <<endl ;
 
 
    for (int b = 1 ; b < wysokosc ;b++)
{
 
 
            for (int c = wysokosc ; c > b ; c--)
            {
            cout << " " ;
            }
 
            cout << "A" ;
 
                if (b != wysokosc /2)
                    {
                    for (int d = 0; d != b*2; d++)
                        cout << " " ;
                    }
                else
                    {
                        for (int e =1 ; e <wysokosc ; e++)
                      cout << "A";
                    }
 
 
 
 
 
                cout << "A" << endl ;
}
 
 
 
    return 0;}
